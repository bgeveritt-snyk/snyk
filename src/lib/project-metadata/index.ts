import * as gitTargetBuilder from './target-builders/git';
import { GitTarget } from './types';
import { DepTree } from '../types';

const TARGET_BUILDERS = [gitTargetBuilder];

export async function getInfo(packageInfo: DepTree): Promise<GitTarget | null> {
  for (const builder of TARGET_BUILDERS) {
    const target = await builder.getInfo(packageInfo);

    if (target) {
      return target;
    }
  }

  return null;
}
