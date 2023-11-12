export default function Bar(props: any) {
    const {lowRes, midRes, highRes} = props;
    return (
        <div className="w-full h-[5vw] bg-zinc-800 flex items-center justify-start gap-[1vw] p-[2vw] my-[2vw]">
            <div className="w-[8vw] h-[3vw] rounded-[0.5vw] bg-zinc-600 flex items-center justify-center cursor-pointer" onClick={lowRes}>Low Res</div>
            <div className="w-[8vw] h-[3vw] rounded-[0.5vw] bg-zinc-600 flex items-center justify-center cursor-pointer" onClick={midRes}>Midium Res</div>
            <div className="w-[8vw] h-[3vw] rounded-[0.5vw] bg-zinc-600 flex items-center justify-center cursor-pointer" onClick={highRes}>High Res</div>
        </div>
    )
}