const outputContainer = document.getElementById("output-container");
const bearerToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiUk9JQkVJUlQiLCJpYXQiOjE2ODM1NTQ4MTAsInN1YiI6ImFnZW50LXRva2VuIn0.Px3TdBLKtjfLoW-m9HX7G98_oSsDYQrEvsXShcKzHgj-QHM_IrrIlR6ZoScDM5Yi0k3W4wOg4Am4pUNCSIYPnzDq2f8PsLQdhUik0RqzwCDKIRdT4LGAlQ-cxXZfPtCDp8JArEmJO5pCqeK3Pt6zcBaPuNjrP_lIqPIX_1b1BzU1g_i84ncKnh02-xW2H_k4dm0SaGkS78MoIk6g5eoXrQ0x27FAyc5QMfOzIBgIVWces0q1e9ZDpVtIXn0Il5uKexyo46DdI30ooVheXSo0Gt0GOkN5KKeWtv3SRlkkKbdPMsNPz0EI-QFhneohdSbBUjLQeB9LjUTSWRO1ZtbThcV_F8qwTudYdq7TOUIFkLv5Q3eyClbD3SEokQA_XP_E5bMwjy2FP15xdfG0ctA_mfNlFtyDXvy_Qo-Ls0QpDsmUqDCdElWo6cI3cqWonrDSWVLOEidvPBJ7H2c_K0vcPzfPZpEkzL_OHMutrmOWhY6tdBSoN-rhwzvpNAqxNP0r";
const writeToContainer = (input) => {
  outputContainer.textContent = input;
};

const getAgentData = async () => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + bearerToken,
    },
  };

  const responseData = await asyncFetch(
    "https://api.spacetraders.io/v2/my/agent",
    options
  );

  console.log(responseData.data);
};

const asyncFetch = async (url, options) => {
  const response = await fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));

  return response;
};
