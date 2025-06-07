import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps, PostProps } from "@/interfaces";
import { useState } from "react";
const text1: string = "Take a moment to celebrate how far you’ve come, and get ready to carry that momentum into the weeks ahead. We've got some exciting updates, tips, and support lined up to keep you moving strong, let’s dive in!"

const Home: React.FC<PostProps[]> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostProps | null>(null);

  const handleAddPost = (newPost: PostProps) => {
    setPost({ ...newPost, id: posts.length + 1 })
  }
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="bg-gradient-to-r from-red-200 to-cyan-400">
        <div className="flex flex-col ">
          <h1 className="text-4xl font-bold mb-4 text-center">Home Page</h1>
          {/*create post*/}

          <button onClick={() => setModalOpen(true)} className="bg-green-300 px-4 py-2 rounded-full text-white w-40 text-center m-auto justify-end" >
            Create Post
          </button>
          {
            posts?.map((post: PostProps, index: number) =>
              <Card
                key={index}
                title={post.title}
                content={post.content}
              />
            )
          }
        </div>
      </main>
      {
        isModalOpen &&
        (<PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />)
      }
    </div>
  );
};

export function getStaticProps() {
  const posts = [
    //{ id: 1, title: "post1", content: `${text1}` },
    { id: 1, title: "post1", content: `${text1}` },
    { id: 1, title: "post2", content: "second post" },
    { id: 1, title: "post3", content: "third post" }
  ];
  return {
    props: { posts }
  };
}

export default Home;
