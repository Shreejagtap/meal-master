import Image from "next/image";

const CarouselCard = ({
  color,
  imageUrl,
  title,
  description,
  buttonLabel,
  buttonHref,
}) => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row lg:gap-3 bg-slate-50 cursor-default">
      <div className="flex-1 pr-6 md:pr-0 pl-6 py-6 flex flex-col items-start gap-6 justify-center">
        <div>
          <h4 className="text-secondary-color text-sm lg:text-base">
            Meal Masters Presents You
          </h4>
          <h2 className="font-bold text-xl lg:text-3xl">
            Avocado Sandwich | Guacamole Sandwich
          </h2>
          <p className="text-tertiary-color text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse
            corrupti quam harum, sapiente dolorem quos in. Cupiditate,
            reprehenderit facere!
          </p>
        </div>
        <button className="custom-btn text-sm lg:text-base">Try it Out?</button>
      </div>
      <div className="flex-1 ">
        <Image
          src={
            "https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={1000}
          height={600}
          alt=""
          className="w-full h-full md:clip-image-hero"
        />
      </div>
    </div>
  );
};
export default CarouselCard;
