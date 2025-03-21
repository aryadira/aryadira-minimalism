import Image from "next/image";

interface WorkCardProps {
  title: string;
  image: string;
  category: string;
  year: number;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, image, category, year }) => {
  return (
    <div className='work-card bg-white p-2.5 rounded-lg border border-[#eeeeee] hover:scale-105 cursor-pointer transition-all'>
      <figure className='border-8 border-white/70 shadow-sm rounded-lg overflow-hidden'>
        <Image src={image} alt={title} className='w-full h-[200px] object-cover min-h-[325px]' />
      </figure>
      <div className='description flex items-center justify-between p-2.5'>
        <div className='title'>
          <div className='text-2xl font-semibold mb-1'>{title}</div>
          <div className='subtitle text-sm text-gray-600'>{category}</div>
        </div>
        <div className='year text-sm font-medium text-gray-700'>{year}</div>
      </div>
    </div>
  );
};

export default WorkCard;
