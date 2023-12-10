import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Link.module.css";
import { Box, BoxProps } from "@chakra-ui/react";

type LinkProps = {
  pathNames: Array<string>;
  href: string;
  displayName: string;
};

const StyledLink = ({ pathNames, href, displayName }: LinkProps) => {
  const pathName = usePathname();

  const isActive =
    pathNames
      .map((n) => n.toLocaleLowerCase())
      .findIndex((p) => p === pathName.slice(1).toLocaleLowerCase()) !== -1;

  const activeStyles: Partial<BoxProps> = {
    borderBottomWidth: "2px",
    borderBottomColor: "primary.400",
    borderBottomStyle: "solid",
  };

  return (
    <Box whiteSpace="nowrap" {...(isActive ? activeStyles : null)}>
      <Link className={isActive ? styles.active : styles.link} href={href}>
        {displayName}
      </Link>
    </Box>
  );
};

export { StyledLink as Link };
