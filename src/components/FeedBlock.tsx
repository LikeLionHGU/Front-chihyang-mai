export default function FeedBlock({ title, request_num, index }) {
  return (
    <div className="flex border rounded-md border-container1 text-black">
      <div className="bg-gray-200 w-[100px] h-[70px]"></div>
      <div className="flex justify-between pl-[10px] pr-[50px] items-center w-[100%]">
        <div className="flex flex-col items-start justify-center">
          <span className="font-bold">{title}</span>
          <div className="flex gap-[10px]">
            <span>{request_num}명 참여</span>
            <span>000% 달성</span>
            <span>000000원 달성</span>
          </div>
        </div>
        <div className="text-main text-[40px] font-bold">{index}</div>
      </div>
    </div>
  );
}
