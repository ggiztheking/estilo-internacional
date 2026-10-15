CREATE TABLE IF NOT EXISTS `cards` (
	`token` text PRIMARY KEY NOT NULL,
	`stamps` integer DEFAULT 0 NOT NULL,
	`cycle` integer DEFAULT 1 NOT NULL,
	`version` integer DEFAULT 0 NOT NULL,
	`created` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `events` (
	`id` text PRIMARY KEY NOT NULL,
	`card` text NOT NULL,
	`cycle` integer NOT NULL,
	`kind` text NOT NULL,
	`reward` text,
	`receipt` text,
	`actor` text NOT NULL,
	`created` text NOT NULL,
	FOREIGN KEY (`card`) REFERENCES `cards`(`token`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `events_receipt_unique` ON `events` (`receipt`);--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `staff` (
	`email` text PRIMARY KEY NOT NULL,
	`user_id` text,
	`created` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `staff_user_id_unique` ON `staff` (`user_id`);
