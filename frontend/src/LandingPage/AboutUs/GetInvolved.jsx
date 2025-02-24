import { Parallax, useParallax } from "react-scroll-parallax";
const GetInvolved = () => {
    const parallax = useParallax<HTMLDivElement>({
      rotate: [0, 360],
    });
    return (
      <div ref={parallax.ref} className="spinner text-green-900">
        😵‍💫
        <div className="diamond">💎</div>
        <div className="clown">🤡</div>
        <div className="money">💰</div>
        <div className="hand">👌🏻</div>
        <div className="flex flex-row gap-10">
        <Parallax speed={-5} className="flex flex-row items-start">
            <div className="slow border border-black size-16">Slow</div>
          </Parallax>
          <Parallax speed={5} className="items-end">
            <div className="fast border border-black size-16">Fast</div>
            
        </Parallax>
        </div>
        <div className="size-64">dffgrgr</div>
            <div className="size-64">dfgdfvfv</div>
            <div className="size-64">vfggesdef</div>
            <div className="size-64">g4rsdfhtg</div>
    </div>
    );
  };

  export default GetInvolved;