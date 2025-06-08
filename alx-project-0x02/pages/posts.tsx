import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header"
import { type PostProps } from "@/interfaces";


const Posts: React.FC<PostProps> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex flex-col  bg-blue-200 bg-gradient-to-r from-emerald-300 to-orange-200
">
      <Header />
      <h1 className="text-4xl font-bold mb-4 text-center">Posts Page</h1>
      <div className="grid grid-cols-1 gap-6">
        {posts?.map((post: PostProps) => (
          <PostCard key={post.userId} {...post} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: { posts }
  }
}


export default Posts;
