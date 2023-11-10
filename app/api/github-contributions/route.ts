import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const variables = `
  {
    "userName": "nemanjag3005"
  }
`;
  const TOKEN = process.env.GITHUB_TOKEN;
  const query = `
  query($userName:String!) {
    user(login: $userName){
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
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

    const contributions = await response.json();

    return NextResponse.json(
      {
        contributionCount:
          contributions.data.user.contributionsCollection.contributionCalendar
            .totalContributions,
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
