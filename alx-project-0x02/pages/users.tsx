import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps[]> = ({ users }) => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-emerald-300 to-orange-200">
      <Header />
      <main>
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
        </div>
        <div className="grid grid-cols gap-2">
          {
            users.map(({ userId, name, email }: UserProps, index) => <UserCard id={index} name={name} email={email} />
            )
          }
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {

  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  return {
    props: {
      users
    }
  };
};

export default Users;
