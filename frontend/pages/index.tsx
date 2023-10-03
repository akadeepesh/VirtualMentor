import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <>
      <header>
        <UserButton afterSignOutUrl="/" />
      </header>
      <div>
        Initial Screen
      </div>

    </>
  );
}

export default HomePage;