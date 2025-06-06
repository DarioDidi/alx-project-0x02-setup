import Card from "@/components/common/Card";
const Home: React.FC = () => {
  return (
    <>
      <h1 className="4xl font-bold mb-4">Home Page</h1>
      <div className="flex gap-6 flex-col justify-self-center-safe">
        <Card title="Card1" content="some content 1" />
        <Card title="Card2" content="some content 2" />
        <Card title="Card3" content="some content 3" />
      </div>
    </>
  );
};

export default Home;
