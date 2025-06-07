import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About: React.FC = () => {
  return (
    <div className='bg-gradient-to-l from-green-200 to-blue-200'>
      <Header />
      <div className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">About Page</h1>
        <div className="flex gap-4 items-center">
          <h1>About us Page</h1>
          <Button size="small" shape="rounded-sm" onClick={() => alert('Small button clicked')}>
            Small Button
          </Button>
          <Button size="medium" shape="rounded-md" onClick={() => alert('Medium button clicked')}>
            Medium Button
          </Button>
          <Button size="large" shape="rounded-full" onClick={() => alert('Large button clicked')}>
            Large Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
