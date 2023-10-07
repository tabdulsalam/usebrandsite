import ItemsCard from "@/components/ui/itemsCard";
import { items } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="home-hero-section px-12 flex items-center ">
        <h1 className=" font-georgiaBold text-[44px] text-white w-[767px] ">
          Swap Your Luxury Attire with Fellow Fashion Enthusiasts
        </h1>
      </section>
      <section className=" bg-ligthGrey p-12 grid grid-cols-4 gap-y-10 ">
        {items.map((item) => (
          <ItemsCard
            key={item.id}
            itemImage={item.itemImage}
            profileImage={item.profileImage}
            price={item.price}
            nameOfItem={item.nameOfItem}
            noOfComment={item.noOfComment}
            noOfLikes={item.noOfLikes}
          />
        ))}
      </section>
    </>
  );
}
