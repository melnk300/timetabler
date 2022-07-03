import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavContainer, LinkContainer, NavInner } from "./style";

const Navigation: FC = () => {
  return (
    <NavContainer>
      <NavInner>
        <Image src="/Logo.svg" width={30} height={30} />
        <LinkContainer>
          <Link href="/">Новости</Link>
          <Link href="/courses">Курсы</Link>
        </LinkContainer>
        <LinkContainer>
          <Link href="/register">Вход</Link>/<Link href="/">Регистрация</Link>
        </LinkContainer>
      </NavInner>
    </NavContainer>
  );
};

export default Navigation;
