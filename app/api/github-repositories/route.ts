import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const variables = `
  {
    "userName": "nemanjag3005"
  }
`;
  const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const query = `
  query($userName:String!) {
        user(login: $userName){
              repositories(first: 100) {
                        edges {
                            node {
                                stargazerCount
                                forkCount
                            }
                        }
                    }
                  }
}
`;
  const body = {
    query,
    variables,
  };

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    const repositories = await response.json();
    return NextResponse.json(
      {
        repositories: repositories,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    let message = "Unknown error";
    if (err instanceof Error) {
      message = err.message;
    }
    return NextResponse.json(
      {
        error: message,
      },
      {
        status: 400,
      }
    );
  }
}
