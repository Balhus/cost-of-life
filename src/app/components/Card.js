import Image from 'next/image';
import Link from 'next/link';

const Card = ({ name, link, image}) => {
    return (
        <Link href={link}>
            <div className="h-32 w-32 lg:h-64 lg:w-64 relative rounded-[15px] shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
                <Image 
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className='object-cover h-full'
                />
                <div className='absolute text-center bottom-0 left-0 right-0 bg-gradient-to-t from-dark-3 via-dark-3 via-10% p-3'>
                    <h3 className='text-white text-xs font-semibold'>{name}</h3>
                </div>
            </div>
        </Link>
    );
}

export default Card;