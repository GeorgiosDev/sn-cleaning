import React from 'react';
import { SERVICES } from '../constants/index';
import { Image } from 'cloudinary-react';

interface ServiceProps {
  id?: string;
  name?: string;
}

export const Services: React.FC<ServiceProps> = ({ id, name }) => {
  const cloudName = 'dkrtgx8ke';

  const supportsLazyLoading = 'loading' in HTMLImageElement.prototype;

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
                <Image
                  cloudName={cloudName}
                  publicId={service.icon}
                  width="1980"
                  height="1240"
                  crop="fill"
                  alt={service.title}
                  className="object-fit w-full h-full"
                  loading={supportsLazyLoading ? "lazy" : "eager"} // Use eager for browsers that don't support lazy loading
                  src={`http://res.cloudinary.com/${cloudName}/image/upload/c_fill,h_1240,w_1980/v1/static/media/${service.icon}`}
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
