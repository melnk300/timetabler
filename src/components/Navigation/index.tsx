import {FC} from "react";
import Link from 'next/link'
import { NavContainer, LinkContainer } from "./style";

const Navigation: FC = () => {
    return (
        <NavContainer>
          <LinkContainer>
            <Link href="/">На главную</Link>
          </LinkContainer>
          <LinkContainer>
            <Link href="/">Вход</Link>/
            <Link href="/">Регистрация</Link>
          </LinkContainer>
        </NavContainer>
    )
}

export default Navigation
