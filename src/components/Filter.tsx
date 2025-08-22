import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";

function Filter() {
  return (
    <div className="w-full md:!border-t-2 border-gray-300 py-4">
      <div>
        <h3 className="!font-semibold text-[16px] text-gray-800 !mb-4">
          Key Foundational Principles
        </h3>
        <CheckboxGroup colorScheme="gray">
          <Stack spacing={2} direction="column">
            <Checkbox value="secure-base">Secure Base</Checkbox>
            <Checkbox value="appreciation">Sense of Appreciation</Checkbox>
            <Checkbox value="learning-org">Learning Organisation</Checkbox>
            <Checkbox value="mission-vision">Mission and Vision</Checkbox>
            <Checkbox value="wellbeing">Wellbeing</Checkbox>
          </Stack>
        </CheckboxGroup>
      </div>

      {/* Document Type */}
      <div>
        <h3 className="!font-semibold text-[16px] text-gray-800 !my-5">
          Document type
        </h3>
        <CheckboxGroup colorScheme="gray">
          <Stack spacing={2} direction="column">
            <Checkbox value="doc">DOC</Checkbox>
            <Checkbox value="link">Link</Checkbox>
            <Checkbox value="pdf">PDF</Checkbox>
            <Checkbox value="video">Video</Checkbox>
          </Stack>
        </CheckboxGroup>
      </div>

      {/* Categories */}
      <div>
        <h3 className="!font-semibold text-[16px] text-gray-800 !my-5">
          Categories
        </h3>
        <CheckboxGroup colorScheme="gray">
          <Stack spacing={2} direction="column">
            <Checkbox value="sample1">Sample</Checkbox>
            <Checkbox value="sample2">Sample</Checkbox>
            <Checkbox value="sample3">Sample</Checkbox>
            <Checkbox value="sample4">Sample</Checkbox>
            <Checkbox value="sample5">Sample</Checkbox>
          </Stack>
        </CheckboxGroup>
      </div>
    </div>
  );
}

export default Filter;
