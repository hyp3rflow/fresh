/** @jsx h */
/** @jsxFrag Fragment */

import { ComponentChildren, Fragment, h, Head, tw } from "../client_deps.ts";
import Counter from "../islands/Counter.tsx";
import LemonDrop from "../islands/LemonDrop.tsx";
import Footer from "../components/Footer.tsx";
import WarningBanner from "../components/WarningBanner.tsx";
import { Leaf } from "../components/Icons.tsx";

export default function MainPage() {
  return (
    <>
      <Head>
        <title>fresh - The next-gen web framework.</title>
        <meta
          name="description"
          content="The next-gen web framework. Just in time edge rendering, island based interactivity, and no configuration TypeScript support."
        />
      </Head>
      <Hero />
      {/* <NavigationBar active="/" /> */}
      <Intro />
      <GettingStarted />
      <Example />
      <Footer />
    </>
  );
}

function Hero() {
  const container = tw
    `w-full flex justify-center items-center flex-col bg(green-200)`;
  const nav = tw`flex justify-end items-center bg(green-200)`;
  const a = tw
    `border(1 black) inline-flex items-center h-10 px-4 m-4 text-black bg-transparent rounded hover:bg-white`;

  return (
    <Fragment>
      <div class={nav}>
        <a href="/docs" class={a}>
          Documentation
        </a>
      </div>
      <section class={container}>
        <LemonDrop />
      </section>
    </Fragment>
  );
}
export interface ListItemProps {
  children: ComponentChildren;
}

function ListItem(props: ListItemProps) {
  return (
    <div class={tw`flex mt-3`}>
      <Leaf />
      <div class={tw`pl-4 flex-1`}>
        {props.children}
      </div>
    </div>
  );
}

function Intro() {
  const title = tw
    `text(4xl sm:4xl lg:4xl gray-900 center) sm:tracking-tight font-extrabold`;

  return (
    <section
      class={tw`max-w-screen-sm mx-auto my-16 px(4 sm:6 md:8) space-y-4`}
    >
      <img
        src="/illust.jpeg"
        class={tw`w-64 mx-auto`}
        alt="deno is drinking fresh lemon squash"
      />

      <h2 class={title}>
        The next-gen web framework.
      </h2>

      <p class={tw`text-gray-600`}>
        Fresh is a next generation web framework, built for speed, reliability,
        and simplicity. Some stand out features:
      </p>

      <div>
        <ListItem>
          <b>Just-in-time rendering</b> on the edge.
        </ListItem>
        <ListItem>
          <b>Island based client hydration</b> for maximum interactivity.
        </ListItem>
        <ListItem>
          <b>Zero runtime overhead</b>: no JS is shipped to the client by
          default.
        </ListItem>
        <ListItem>
          <b>No build step</b>.
        </ListItem>
        <ListItem>
          <b>No configuration</b> necessary.
        </ListItem>
        <ListItem>
          <b>TypeScript support</b> out of the box.
        </ListItem>
      </div>

      <p class={tw`text-gray-600`}>
        Fresh embraces the tried and true design of server side rendering and
        progressive enhancement on the client side.
      </p>
    </section>
  );
}

function GettingStarted() {
  return (
    <section
      class={tw`max-w-screen-sm mx-auto my-16 px(4 sm:6 md:8) space-y-4`}
    >
      <h2 id="getting-started" class={tw`text(xl gray-600) font-bold`}>
        <a href="#getting-started" class={tw`hover:underline`}>
          Getting started
        </a>
      </h2>
      <WarningBanner />
      <p class={tw`text-gray-600`}>
        To get started, make sure you have the{" "}
        <a href="https://deno.land" class={tw`text-blue-600 hover:underline`}>
          Deno CLI
        </a>{" "}
        installed.
      </p>
      <p class={tw`text-gray-600`}>
        Then, run the following command to install the `fresh` CLI:
      </p>
      <pre class={tw`overflow-x-auto py-2 px-4 bg(gray-100)`}>
        deno install -A -f --no-check -n fresh -r
        https://raw.githubusercontent.com/lucacasonato/fresh/main/cli.ts
      </pre>
      <p class={tw`text-gray-600`}>
        Once installed, you can use the `fresh` command to bootstrap a new
        project:
      </p>
      <pre class={tw`overflow-x-auto py-2 px-4 bg(gray-100)`}>
        fresh init my-app
      </pre>
      <p class={tw`text-gray-600`}>
        Enter the newly created project directory and run the following command
        to start the development server:
      </p>
      <pre class={tw`overflow-x-auto py-2 px-4 bg(gray-100)`}>
        deno task start
      </pre>
      <p class={tw`text-gray-600`}>
        You can now open{" "}
        <a
          href="http://localhost:8000"
          class={tw`text-blue-600 hover:underline`}
        >
          http://localhost:8000
        </a>{" "}
        in your browser to view the page.
      </p>
      <p class={tw`text-gray-600`}>
        A more in-depth getting started guide is available in{" "}
        <a href="/docs" class={tw`text-blue-600 hover:underline`}>the docs</a>.
      </p>
    </section>
  );
}

const timeFmt = new Intl.DateTimeFormat("en-US", {
  timeStyle: "long",
  hour12: false,
});

function Example() {
  return (
    <section
      class={tw`max-w-screen-sm mx-auto my-16 px(4 sm:6 md:8) space-y-4`}
    >
      <h2 id="example" class={tw`text(xl gray-600) font-bold`}>
        <a href="#example" class={tw`hover:underline`}>
          Example
        </a>
      </h2>
      <p class={tw`text-gray-600`}>
        This text is being server side rendered on the fly. It was rendered at
        {" "}
        {timeFmt.format(new Date())}.
      </p>
      <p class={tw`text-gray-600`}>
        The counter below was rendered on the server with a starting value of 3,
        and was then hydrated on the client to provide interactivity. Try out
        the buttons!
      </p>
      <Counter start={3} />
      <p class={tw`text-gray-600`}>
        Only the JS required to render that counter is sent to the client.
      </p>
    </section>
  );
}
