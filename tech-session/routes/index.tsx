/** @jsx h */
import { h } from "../client_deps.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <h1>
        Hi Tech session!!
      </h1>
      <Counter start={3} />
    </div>
  );
}
