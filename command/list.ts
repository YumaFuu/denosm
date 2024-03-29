import { ListSSMParameters } from "../ssm/index.ts";

export const ListAction = async (
  { profile, query }: { profile?: string; query?: string },
) => {
  profile = profile || Deno.env.get("AWS_PROFILE");

  if (!profile) {
    console.log("No profile specified");
    return;
  }

  const list = await ListSSMParameters(profile);
  const parameters = list
    .Parameters
    .map((p) => p.Name)
    .filter((p) => query ? p.includes(query) : true)
    .join("\n");

  console.log(parameters);
  return parameters;
};
