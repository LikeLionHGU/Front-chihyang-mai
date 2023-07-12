"use client";

import { Autocomplete, Chip, TextField } from "@mui/material";
import { Controller, Control } from "react-hook-form";

const top100Films = [
  { title: "james_123", year: 1994 },
  { title: "amy_love", year: 1972 },
  { title: "john_smith", year: 1974 },
  { title: "kate_85", year: 2008 },
  { title: "mike91", year: 1957 },
  { title: "이순신", year: 1993 },
  { title: "김철수", year: 1994 },
  { title: "스티브잡스", year: 2003 },
  { title: "철수123", year: 1966 },
  { title: "엘리자베스", year: 1999 },
  { title: "matt_damon", year: 2001 },
  { title: "tom_hanks", year: 1980 },
  { title: "김영희", year: 1994 },
  { title: "사라", year: 2010 },
  { title: "짱구", year: 2002 },
  { title: "심청이", year: 1975 },
  { title: "유재석", year: 1990 },
  { title: "박명수", year: 1999 },
  { title: "angelina", year: 1954 },
  { title: "brad_pitt", year: 1977 },
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
