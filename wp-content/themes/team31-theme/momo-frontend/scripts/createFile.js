const fs = require("fs");
const path = require("path");

const featureName = process.argv[2];
if (!featureName) {
  console.error("❌ フィーチャー名を指定してください！ 例: yarn create-files xxxx");
  process.exit(1);
}

const baseDir = path.resolve(__dirname, "../src/");
const featureDir = path.join(baseDir, "features", featureName);
const pageDir = path.join(baseDir, "pages", featureName);

const files = [
  "XxxxPageContainer.tsx",
].map(file => file.replace("Xxxx", featureName.charAt(0).toUpperCase() + featureName.slice(1)));

const subDirs = ["components", "contexts", "constants", "helpers", "types"];

// ディレクトリ作成関数
const createDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📂 Created directory: ${dir}`);
  }
};

const uppersFeatureName = featureName.charAt(0).toUpperCase() + featureName.slice(1)
const featureContainerData = `// Auto-generated file
import React from 'react';
const ${uppersFeatureName}PageContainer: React.FC = () => {
    return <div>${uppersFeatureName} Template</div>;
};

export default ${uppersFeatureName}PageContainer;
`;

// ファイル作成関数
const createFile = (filePath, content = "// Auto-generated file\n") => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`📄 Created file: ${filePath}`);
  }
};

// features 配下のディレクトリとファイル作成
createDir(featureDir);
subDirs.forEach(subDir => createDir(path.join(featureDir, subDir)));
files.forEach(file => createFile(path.join(featureDir, file), featureContainerData));

// pages 配下の page.tsx 作成
createDir(pageDir);
createFile(path.join(pageDir, "page.tsx"), `
import React from "react";
import ${uppersFeatureName}PageContainer from "@/features/${featureName}/${uppersFeatureName}PageContainer";
import MJLayout from "@/components/MJLayout";
export default function ${featureName.charAt(0).toUpperCase() + featureName.slice(1)}Page() {
  return (
    <MJLayout>
        <${uppersFeatureName}PageContainer />
    </MJLayout>
  );
}`);

console.log("✅ ファイル作成完了！");
