"use client";

import { Autocomplete, Chip, TextField } from "@mui/material";
import { Controller, Control } from "react-hook-form";

const top100Films = [
  { title: "이병헌 ", year: 1994 },
  { title: "송강호", year: 1972 },
  { title: "현빈", year: 1974 },
  { title: "김태희", year: 2008 },
  { title: "공유", year: 1957 },
  { title: "한가인", year: 1993 },
  { title: "박서준", year: 1994 },
  { title: "수지", year: 2003 },
  { title: "이민호", year: 1966 },
  { title: "차인표", year: 1999 },
  { title: "전지현", year: 2001 },
  { title: "손예진", year: 1980 },
  { title: "정유미", year: 1994 },
  { title: "김소현", year: 2010 },
  { title: "박형식", year: 2002 },
  { title: "이성민", year: 1975 },
  { title: "송혜교", year: 1990 },
  { title: "박명수", year: 1999 },
  { title: "이지은", year: 1954 },
  { title: "김구라", year: 1977 },
];

type Props = {
  control: any;
};

export default function Influencer({ control }: Props) {
  return (
    <Controller
      name="influencer"
      control={control}
      defaultValue={[]}
      render={({ field }) => (
        <Autocomplete
          sx={{ width: "100%" }}
          color="error"
          multiple
          id="tags-filled"
          options={top100Films.map((option) => option.title)}
          value={field.value}
          onChange={(e, newValue) => field.onChange(newValue)}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              sx={{ width: "100%" }}
              {...params}
              color="error"
              variant="filled"
              label="펀딩 요청 대상"
              placeholder="ex) james_123"
            />
          )}
        />
      )}
    />
  );
}
