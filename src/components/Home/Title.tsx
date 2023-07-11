type Props = {
  title: string;
  subTitle: string;
};
export default function Title({ title, subTitle }: Props) {
  return (
    <div className="flex flex-col justify-center items-start text-black">
      <span className="text-[30px] font-bold ">{title}</span>
      <span>{subTitle}</span>
    </div>
  );
}
