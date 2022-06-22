const Video = () => {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh]  aspect-video"></div>
                {/* video nao ocupa  tela toda para despertar o interesse do user nas informações em baixo */}
            </div>
            <div className="p-8 max-w-[1100px] "></div>
        </div>
    );
};

export default Video;
