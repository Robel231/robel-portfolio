import { Project } from '../types';

const GITHUB_API_BASE = 'https://api.github.com';

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export const fetchGitHubProfile = async (username: string): Promise<GitHubUser | null> => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
    if (!response.ok) {
        if (response.status === 403) {
            console.warn('GitHub API rate limit exceeded for profile fetch');
        }
        return null;
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    return null;
  }
};

export const fetchGitHubRepo = async (repoUrl: string): Promise<GitHubRepo | null> => {
  try {
    // Extract owner and repo name from URL
    // Expected format: https://github.com/owner/repo
    const parts = repoUrl.split('github.com/');
    if (parts.length !== 2) return null;
    
    const repoPath = parts[1];
    const response = await fetch(`${GITHUB_API_BASE}/repos/${repoPath}`);
    
    if (!response.ok) {
        if (response.status === 403) {
            console.warn(`GitHub API rate limit exceeded for repo ${repoPath}`);
        }
        return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching GitHub repo ${repoUrl}:`, error);
    return null;
  }
};

export const fetchUserRepos = async (username: string): Promise<GitHubRepo[]> => {
    try {
        const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?per_page=100`);
        if (!response.ok) {
             if (response.status === 403) {
                console.warn('GitHub API rate limit exceeded for user repos');
            }
            return [];
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching user repos:', error);
        return [];
    }
};

export const calculateTotalStars = (repos: GitHubRepo[]): number => {
    return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};
