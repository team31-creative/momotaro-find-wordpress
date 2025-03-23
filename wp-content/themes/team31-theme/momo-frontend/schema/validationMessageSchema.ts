export const validationMessage = {
    required: "${label}は必須項目です。",
    typeName: "正しい${label}を入力してください。",
    min: (minLength: number) => {return "${label}" + `は${minLength}文字以上入力してください。`},
    max: (maxLength: number) => {return "${label}" + `は最低${maxLength}文字以上である必要があります。`},
    matchesBigWord: "${label}には少なくとも1つの大文字を含めてください。",
    matchesSmallWord: "${label}には少なくとも1つの小文字を含めてください。",
    matchesIntWord: "${label}には少なくとも1つの数字を含めてください。",
}