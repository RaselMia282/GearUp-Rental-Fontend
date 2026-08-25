import { GearsList } from "@/components/Gears";
import { getGears } from "@/service/gears";


export default async function GearsPage() {
  const gears = await getGears();

  return <GearsList gears={gears} />;
}