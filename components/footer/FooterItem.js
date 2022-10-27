import FooterListItem from "./FooterListItem";

export default function FooterItem({ title, lists }) {
  return (
    <div className="md:w-3/12 w-6/12 mb-5 md:mb-0">
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
