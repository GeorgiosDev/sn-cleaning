import { SERVICES } from '../constants/index';
import office477 from "../assets/services/office-433_x_318.webp"
import office733 from "../assets/services/office-733_x_488.webp"
import office954 from "../assets/services/office-954_x_636.webp"
import office1240 from "../assets/services/office-1240_x_827.webp"
import office1466 from "../assets/services/office-1466_x_977.webp"
import office1740 from "../assets/services/office-1740_x_1160.webp"
import office1980 from "../assets/services/office-1980_x_1319.webp"
import home433 from "../assets/services/home-433_x_318.webp"
import home733 from "../assets/services/home-733_x_488.webp"
import home954 from "../assets/services/home-954_x_636.webp"
import home1240 from "../assets/services/home-1240_x_827.webp"
import home1466 from "../assets/services/home-1466_x_977.webp"
import home1740 from "../assets/services/home-1740_x_1160.webp"
import home1980 from "../assets/services/home-1980_x_1319.webp"
import glasspane433 from "../assets/services/glasspane-433_x_318.webp"
import glasspane733 from "../assets/services/glasspane-733_x_488.webp"
import glasspane954 from "../assets/services/glasspane-954_x_636.webp"
import glasspane1240 from "../assets/services/glasspane-1240_x_827.webp"
import glasspane1466 from "../assets/services/glasspane-1466_x_977.webp"
import glasspane1740 from "../assets/services/glasspane-1740_x_1160.webp"
import glasspane1980 from "../assets/services/glasspane-1980_x_1319.webp"

import cleaning1433 from "../assets/services/cleaning1-433_x_318.webp"
import cleaning1733 from "../assets/services/cleaning1-733_x_488.webp"
import cleaning1954 from "../assets/services/cleaning1-954_x_636.webp"
import cleaning11240 from "../assets/services/cleaning1-1240_x_827.webp"
import cleaning11466 from "../assets/services/cleaning1-1466_x_977.webp"
import cleaning11740 from "../assets/services/cleaning1-1740_x_1160.webp"
import cleaning11980 from "../assets/services/cleaning1-1980_x_1319.webp"

import cleaning3433 from "../assets/services/cleaning3-433_x_318.webp"
import cleaning3733 from "../assets/services/cleaning3-733_x_488.webp"
import cleaning3954 from "../assets/services/cleaning3-954_x_636.webp"
import cleaning31240 from "../assets/services/cleaning3-1240_x_827.webp"
import cleaning31466 from "../assets/services/cleaning3-1466_x_977.webp"
import cleaning31740 from "../assets/services/cleaning3-1740_x_1160.webp"
import cleaning31980 from "../assets/services/cleaning3-1980_x_1319.webp"

import cleaning4433 from "../assets/services/cleaning4-433_x_318.webp"
import cleaning4733 from "../assets/services/cleaning4-733_x_488.webp"
import cleaning4954 from "../assets/services/cleaning4-954_x_636.webp"
import cleaning41240 from "../assets/services/cleaning4-1240_x_827.webp"
import cleaning41466 from "../assets/services/cleaning4-1466_x_977.webp"
import cleaning41740 from "../assets/services/cleaning4-1740_x_1160.webp"
import cleaning41980 from "../assets/services/cleaning4-1980_x_1319.webp"



interface ServiceProps {
  id?: string;
  name?: string;
}

export const Services: React.FC<ServiceProps> = ({ id, name }) => {
  return (
    <div className='bg-custom-winter py-16 bg-myBlue-200' id={id}>
      <div className='container mx-auto px-4 flex flex-col items-center'>
        <h2 className='text-4xl md:text-xl font-bold text-myBlue-500 mb-8 flexBetween text-white bg-myBlue-50 rounded-lg md:w-1/5 w-full'>
          Οι Υπηρεσίες μας
        </h2>
        <div className='grid grid-cols-1 rounded-lg md:grid-cols-3 gap-8'>
          {SERVICES.map((service, index) => (
            <div key={index} className='bg-myBlue-50 rounded-lg grid-box w-full'>
              <div className="relative rounded overflow-hidden">
                <img
                  src={getOfficeImage(service.icon)}
                  srcSet={`${getOfficeImage(service.icon, 477)} 477w, ${getOfficeImage(service.icon, 733)} 733w, ${getOfficeImage(service.icon, 954)} 954w, ${getOfficeImage(service.icon, 1240)} 1240w, ${getOfficeImage(service.icon, 1466)} 1466w, ${getOfficeImage(service.icon, 1740)} 1740w, ${getOfficeImage(service.icon, 1980)} 1980w`}
                  sizes="(max-width: 433px) 100vw, (max-width: 733px) 100vw, (max-width: 954px) 100vw, (max-width: 1240px) 100vw, (max-width: 1466px) 100vw, (max-width: 1740px) 100vw, (max-width: 1980px) 100vw, 1980px"
                  alt="icon"
                  className="object-fit w-full h-full"
                  loading="lazy"
                />
                <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-4xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                  {service.title}
                </p>
              </div>
              <p className='text-white mt-2 m-2 text-justify'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Function to get the appropriate office image based on size
function getOfficeImage(basePath: string, size?: number): string {
  switch (size) {
    case 477:
      return office477;
    case 733:
      return office733;
    case 954:
      return office954;
    case 1240:
      return office1240;
    case 1466:
      return office1466;
    case 1740:
      return office1740;
    case 1980:
      return office1980;
    default:
      return basePath;
  }
}