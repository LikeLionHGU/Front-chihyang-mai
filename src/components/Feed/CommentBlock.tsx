export default function CommentBlock({
  name,
  comment,
}: {
  name: string;
  comment: string;
}) {
  return (
    <div className="relative w-[100%] h-[60px] flex p-[10px] border border-gray-200">
      <div className=" bg-white w-[40px] h-[40px] rounded-full mr-[10px]" />
      <div className="">
        <div className="font-bold text-[14px] ">
          {name} <span className="text-gray-400 ml-[10px]">답글달기</span>
        </div>
        <div className="font-bold text-[13px]">{comment}</div>
      </div>
    </div>
  );
}
