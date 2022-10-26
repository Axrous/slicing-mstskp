import FooterItem from "./FooterItem";

export default function FooterSection() {
  return (
    <section>
      <div className="container mx-auto mt-96">
        <div className="pt-28 flex">
          <FooterItem
            title={"alternatives"}
            lists={["Buffer", "Sendible", "later", "Social Pilot"]}
          />
          <FooterItem
            title={"siteMap"}
            lists={["Top", "Features", "Reasons", "Alternatives", "Login"]}
          />
          <FooterItem
            title={"company"}
            lists={[
              "About Us",
              "Contact",
              "Privacy Policy",
              "Terms of Service",
              "Help",
            ]}
          />
          <FooterItem
            title={"get in touch"}
            lists={["Twitter", "Facebook", "Dribble"]}
          />
        </div>
        <footer className="mt-12 text-center py-12 border-t-2">
          COPYRIGHT © 2022 — DESIGN NAUVAL | SLICING BY ARKUU
        </footer>
      </div>
    </section>
  );
}
