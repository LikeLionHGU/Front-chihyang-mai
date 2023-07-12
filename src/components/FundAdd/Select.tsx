import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

interface Film {
  title: string;
  year: number;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Film[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...(topFilms as any)]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ py: "-10px" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          color="error"
          sx={{
            width: "150px",
            borderRadius: "10px",
          }}
          {...params}
          label="카테고리"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [
  { title: "여행" },
  { title: "요리" },
  { title: "영화" },
  { title: "도서" },
  { title: "음악" },
  { title: "스포츠" },
  { title: "뉴스" },
  { title: "미술" },
  { title: "건강" },
  { title: "과학" },
  { title: "역사" },
  { title: "기술" },
  { title: "자동차" },
  { title: "게임" },
  { title: "패션" },
  { title: "사진" },
  { title: "인테리어" },
  { title: "정치" },
  { title: "비즈니스" },
  { title: "스타트업" },
  { title: "스타일" },
  { title: "디자인" },
  { title: "식당" },
  { title: "마케팅" },
  { title: "코딩" },
  { title: "금융" },
  { title: "부동산" },
];
