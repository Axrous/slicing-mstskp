import FooterListItem from "./FooterListItem";

export default function FooterItem({ title, lists }) {
  return (
    <div className="w-3/12">
      <h4 className="uppercase text-sm font-bold tracking-widest mb-5">
        {title}
      </h4>
      <ul>
        {lists.map((list) => (
          <FooterListItem key={list}>{list}</FooterListItem>
        ))}
      </ul>
    </div>
  );
}
