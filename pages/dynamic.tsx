import dynamic from "next/dynamic";

const DynamicComponent = dynamic((() => import("./lazy")) as any, {
  loading: () => <p>...</p>
});

export default () => (
  <div>
    Load About
    <DynamicComponent />
  </div>
);
