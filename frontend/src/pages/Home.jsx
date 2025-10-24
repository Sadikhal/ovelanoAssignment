import TabsWidget from '../components/TabsWidget';
import GalleryWidget from '../components/GalleryWidget';
import Separator from '../components/ui/Separator';

const Home = () => {
   return (
    <div className="h-full flex flex-row lg:gap-24 justify-center lg:p-10 w-full p-3 overflow-x-hidden">

      <div className="hidden lg:block lg:w-1/2">
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-3 lg:pr-6 pr-2 h-full">
        <TabsWidget />
        <Separator/>
        <GalleryWidget />
        <Separator/>
      </div>
      
    </div>
  );
}

export default Home