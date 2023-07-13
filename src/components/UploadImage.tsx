"use client";

import { useCallback, useRef, useState } from "react";

// import { getValue } from "@testing-library/user-event/dist/utils";

import {
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { storage } from "@/Firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import compressedFile from "./Image/compressFile";

export function ImageUpload({ setValue, getValues }: any) {
  const inputRef = useRef(null);
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }

    (inputRef.current as any).click();
  }, []);

  const onImageChange = async (e: any) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    const lowCapacityFile = await compressedFile(file[0]);

    const storageRef = ref(storage, `files/${file[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, lowCapacityFile as any);

    uploadTask.on(
      "state_changed",
      (snapshot: any) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error: any) => {
        switch (error.code) {
          case "storage/canceld":
            alert("Upload has been canceled");
            break;
        }
      },
      () => {
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const prev = getValues("image_urls");
          setValue("image_urls", [...prev, downloadURL]);
        });
      }
    );
  };

  return (
    <>
      <Button
        onClick={onUploadImageButtonClick}
        variant="outlined"
        sx={{
          backgroundColor: "background.default",
          borderColor: "primary.main",
          color: "primary.main",
          fontWeight: "normal",
          mt: "20px",
        }}
      >
        인증샷 업로드
      </Button>

      <input
        hidden
        type="file"
        accept=".jpg,.jpeg,.png,.gif,.bmp,.heic,.heif"
        ref={inputRef}
        onChange={onImageChange}
      />
    </>
  );
}
