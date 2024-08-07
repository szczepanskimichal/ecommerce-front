import AccountLink from "./AccountLink";
import ProfileIcon from "./icons/ProfileIcon";
import Layout from "./Layout";

export default function AccountLayout() {
  return (
    <Layout>
      <div className="p-5 w-full h-full">
        <div className="box w-full h-full flex flex-col sm:flex-row flex-grow">
          <aside className="h-full rounded-t-lg sm:rounded-l-lg sm:rounded-r-none bg-gray-200 flex justify-center sm:justify-start sm:flex-col gap-3 p-5 whitespace-nowrap">
            <AccountLink
              href="profile"
              title="Profile information"
              Icon={ProfileIcon}
            />
          </aside>
        </div>
      </div>
    </Layout>
  );
}
