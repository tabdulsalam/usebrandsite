import Image from "next/image";
import CommentImg from "@/public/assets/Icons/comment.svg";
import LikeImg from "@/public/assets/Icons/like.svg";
import Link from "next/link";

interface ItemsCardProps {
  itemImage: string;
  profileImage: string;
  price: string;
  nameOfItem: string;
  noOfComment: number;
  noOfLikes: number;
}

export default function ItemsCard({
  itemImage,
  profileImage,
  price,
  nameOfItem,
  noOfComment,
  noOfLikes,
}: ItemsCardProps) {
  return (
    <Link
      href={{
        pathname: "/sell",
      }}
      className="ItemCard bg-white w-[312px] h-[417px] px-4 py-[14px]"
    >
      <div className="relative">
        <Image
          className="rounded-md object-cover"
          src={itemImage}
          width={280}
          height={320}
          alt=""
        />
        <Image
          className="absolute bottom-2 left-2"
          src={profileImage}
          width={50}
          height={50}
          alt=""
        />
      </div>
      <div className="font-sourceSansProBold text-2xl py-[6px] ">{price}</div>
      <div className="flex justify-between">
        <div className="font-sourceSansProRegular text-base ">{nameOfItem}</div>
        <div className="flex gap-2">
          <div className="flex">
            <Image src={CommentImg} alt="" />
            <div className="font-sourceSansProRegular text-base mx-1">
              {noOfComment}
            </div>
          </div>
          <div className="flex">
            <Image src={LikeImg} alt="" />
            <div className="font-sourceSansProRegular text-base mx-1">
              {noOfLikes}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
