import styles from "./page.module.css";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className={styles.page}>
      <Input type="email" placeholder="Email" />
    </div>
  );
}
