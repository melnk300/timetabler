import {FC} from "react";
import Link from 'next/link'
import { NavContainer, LinkContainer, NavInner } from "./style";

const Navigation: FC = () => {
    return (
          <NavContainer>
              <NavInner>
                <LinkContainer>
                  <Link href="/">На главную</Link>
                </LinkContainer>
                <LinkContainer>
                  <Link href="/">Вход</Link>/
                  <Link href="/">Регистрация</Link>
                </LinkContainer>
              </NavInner>
          </NavContainer>

    )
}

export default Navigation
