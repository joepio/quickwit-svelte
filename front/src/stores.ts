import { readable, writable } from "svelte/store";
import { Client } from "./lib/qw/client";

export const query = writable("");

export const client = readable(new Client("http://localhost:7280"));
