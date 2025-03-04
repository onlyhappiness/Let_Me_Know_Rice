import { Chip } from "@/shared/ui/chip";

const OptionFilter = () => {
  return (
    <div className="flex items-center gap-3">
      <Chip label="인기순" />
      <Chip label="가격순" />
      <Chip label="최신순" />
    </div>
  );
};

export default OptionFilter;
