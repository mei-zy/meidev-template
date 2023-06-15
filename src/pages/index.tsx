import { MDXProvider } from "@mdx-js/react";
import HelloWorld from "../mdx/hello.mdx";
import { styled } from "styled-components";

export default function Page() {
  return (
    <MDXProvider>
      <HelloWorld />
    </MDXProvider>
  );
}
