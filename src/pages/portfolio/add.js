import { FirebaseStorage, db } from "@/server/db";
import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadString } from "firebase/storage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
export default function Admin() {
  dayjs.locale("id");
  dayjs.extend(relativeTime);
  const uid = uuidv4();
  const [imgsSrc, setImgsSrc] = useState([]);
  const { register, handleSubmit, control, reset } = useForm();
  const storageRef = ref(FirebaseStorage, `/berita/${uid}`);
  const metadata = {
    contentType: "image/jpeg",
  };

  const addDatafromDBFirestore = async (data) => {
    const push = async () => {
      await addDoc(collection(db, "portfolio"), {
        title: data.title,
        isi: data.isi,
        thumbnail: data.gambar1,
        content: [data.gambar1, data.gambar2],
        content1: [...imgsSrc],
        tanggal_berita: dayjs().format("ddd, MMM D, YYYY HH:mm"),
        tanggal: dayjs().format(),
        dilihat: 0,
      });
      reset();
    };
    toast.promise(push(), {
      loading: "Mohon tunggu...",
      success: <b>Berhasil menambahkan berita</b>,
      error: <b>Terjadi kesalahan, silahkan coba lagi.</b>,
    });
  };

  return (
    <>
      <div className="flex p-4 place-items-center gap-2"></div>
      <Toaster />
      <form
        className="flex flex-col w-full md:w-[500px] m-auto pt-10 px-10"
        onSubmit={handleSubmit(addDatafromDBFirestore)}
      >
        <textarea
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          placeholder="Masukan title berita"
          control={control}
          {...register("title", { required: true })}
        />
        <textarea
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          placeholder="Masukan Gambar 1"
          control={control}
          {...register("gambar1", { required: true })}
        />{" "}
        <textarea
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          placeholder="Masukan Gambar 2"
          control={control}
          {...register("gambar2", { required: true })}
        />
        <textarea
          rows={"6"}
          className="mb-2 py-1 px-3 w-full rounded-lg mr-2 shadow-lg"
          placeholder="Masukan isi berita"
          control={control}
          {...register("isi", { required: true })}
        />
        <button
          className="hover:bg-gray-900 w-full duration-1000 shadow-lg hover:text-white mb-2 py-1 px-3 rounded-lg hover:cursor-pointer"
          type="submit"
        >
          Kirim
        </button>
      </form>
    </>
  );
}
