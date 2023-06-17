"use client";
import "regenerator-runtime/runtime";
import Image from "next/image";
import { AiOutlineSearch, AiFillCamera } from "react-icons/ai";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const googleLogo: string =
  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

const Main: React.FC = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const fillInput = () => {
    const formValue = "Hello how are you?";
    for (let index = 0; index < formValue.length; index++) {
      setValue((prev) => prev.concat(formValue.charAt(index)));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<SVGElement, MouseEvent>,
    otherParam: string
  ) => {
    e.preventDefault();
    if (otherParam.length != 0) {
      router.push(`https://www.google.com/search?q=${otherParam}`);
    } else {
      if (value.length === 0) {
        return;
      }
      router.push(`https://www.google.com/search?q=${value}`);
    }
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="flex flex-col items-center mt-5">
      <Image
        src={"/googlelogo.png"}
        alt="googleLogo"
        height={100}
        width={300}
        style={{ height: 100 }}
      />
      <form
        className="flex items-center border rounded-full w-1/3 mt-5 p-2 [&>*]:text-xl"
        onSubmit={(e) => handleSubmit(e, "")}
      >
        <AiOutlineSearch className="" />
        <input
          className="outline-none w-full px-2"
          placeholder="Type to search ..."
          onChange={(e) => handleChange(e)}
          value={value || transcript}
        />
        <BsFillMicFill
          className="mr-2 cursor-pointer"
          onMouseDown={startListening}
          onMouseUp={(e) => {
            SpeechRecognition.stopListening();
            setValue(transcript);
            handleSubmit(e, transcript);
          }}
        />
        <AiFillCamera className="cursor-pointer" />
      </form>
      <div className="mt-5">
        <button
          className="border-2 rounded py-1 px-3 m-1"
          onClick={(e) => handleSubmit(e, "")}
        >
          Google Search
        </button>
        <button
          onClick={() => {
            router.push("https://www.google.com/doodles");
          }}
          className="border-2 rounded py-1 px-3 m-1"
        >
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default Main;
